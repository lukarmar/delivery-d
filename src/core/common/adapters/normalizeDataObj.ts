import { injectable } from 'inversify';

interface TransformDataObjInterface {
  [key: string]: any;
}
@injectable()
export default class NormalizeDataObj {
  public normalize(data: TransformDataObjInterface): TransformDataObjInterface {
    const newData: TransformDataObjInterface = {};

    console.log(data);

    Object.keys(data).forEach((key) => {
      const newKey = key
        .normalize('NFD')
        .replace(/[^a-zA-Z\s]/g, '')
        .trim();
      newData[newKey] = data[key];
    });

    return newData;
  }
}
