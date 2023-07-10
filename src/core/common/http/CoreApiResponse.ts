import { Code } from '../code/Code';
import { Nullable } from '../types/Commontypes';

export class CoreApiResponse<TData> {
  public readonly data: Nullable<TData>;
  public readonly code: number;
  public readonly message: string;
  public readonly timestamp: number;
  public readonly status: number;

  private constructor(code: number, message: string, status: number, data?: TData) {
    this.code = code;
    this.message = message;
    this.status = status;
    this.data = data || null;
    this.timestamp = Date.now();
  }

  public static success<TData>(data?: TData, message?: string): CoreApiResponse<TData> {
    const resultCode: number = Code.SUCCESS.code;
    const resultMessage: string = message || Code.SUCCESS.message;
    const resultStatus: number = Code.SUCCESS.status || resultCode;

    return new CoreApiResponse(resultCode, resultMessage, resultStatus, data);
  }

  public static error<TData>(code?: number, status?: number, message?: string, data?: TData): CoreApiResponse<TData> {
    const resultCode: number = code || Code.INTERNAL_ERROR.code;
    const resultMessage: string = message || Code.INTERNAL_ERROR.message;
    const resultStatus: number = status || Code.INTERNAL_ERROR.status;

    return new CoreApiResponse(resultCode, resultMessage, resultStatus, data);
  }
}
