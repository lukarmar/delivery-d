import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import { bindings } from '@infra/config/inversifyConfig';
import * as express from 'express';
import * as bodyParser from 'body-parser';
// import * as helmet from 'helmet';

class App {
  private application!: express.Application;
  private container: Container;
  private server: InversifyExpressServer;

  constructor() {
    this.container = new Container();
    this.server = new InversifyExpressServer(this.container);
  }

  public startServer() {
    this.loadBindings().then(() => {
      this.serverConfig();
      this.application.listen(3000, () => console.log('Server started on port 3000'));
    });
  }

  serverConfig() {
    this.server.setConfig((app) => {
      app.use(
        bodyParser.urlencoded({
          extended: true,
        }),
      );
      app.use(bodyParser.json());
    });
    this.application = this.server.build();
  }

  async loadBindings() {
    await this.container.loadAsync(bindings);
  }

  get app(): express.Application {
    return this.application;
  }
}

export default App;
