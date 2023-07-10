import { ICodePros } from '@core/common/code/Code';
import { Optional } from '@core/common/types/Commontypes';

export type ICreateExceptionPayload<TData> = {
  code: ICodePros;
  data?: TData;
  overrideMessage?: Optional<string>;
};

export class Exception<TData> extends Error {
  public readonly code: number;
  public readonly data?: Optional<TData>;
  public readonly status: number;

  private constructor(codeDescription: ICodePros, data?: TData, overrideMessage?: Optional<string>) {
    super();

    this.code = codeDescription.code;
    this.data = data;
    this.status = codeDescription.status;
    this.message = overrideMessage || codeDescription.message;

    Error.captureStackTrace(this, this.constructor);
  }

  public static new<TData>(payload: ICreateExceptionPayload<TData>): Exception<TData> {
    return new Exception(payload.code, payload.data, payload.overrideMessage);
  }
}
