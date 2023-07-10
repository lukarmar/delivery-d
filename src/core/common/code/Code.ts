export type ICodePros = {
  status: number;
  code: number;
  message: string;
};

export class Code {
  public static readonly SUCCESS: ICodePros = {
    status: 200,
    code: 200,
    message: 'Success',
  };

  public static readonly BAD_REQUEST_ERROR: ICodePros = {
    status: 400,
    code: 400,
    message: 'Bad Request',
  };

  public static UNAUTHORIZED_ERROR: ICodePros = {
    status: 401,
    code: 401,
    message: 'Unauthorized error.',
  };

  public static INTERNAL_ERROR: ICodePros = {
    status: 500,
    code: 500,
    message: 'Internal error.',
  };

  public static ENTITY_VALIDATION_ERROR: ICodePros = {
    status: 400,
    code: 4000,
    message: 'Entity validation error.',
  };
}
