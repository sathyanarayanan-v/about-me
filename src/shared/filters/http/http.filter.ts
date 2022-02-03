import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  Logger,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  private getPayload(status: number, exception: HttpException) {
    if (status === HttpStatus.NOT_FOUND) {
      return 'Not found';
    }
    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      return 'Something went wrong';
    }
    return exception.message;
  }
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const url = req.url;
    const method = req.method;
    const res = ctx.getResponse();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    if (status === HttpStatus.NOT_FOUND) {
      res.status(status).render('404', {
        code: status,
        response: res,
        pageTitle: 'Not Found',
      });
      return;
    }
    const error_response = {
      code: status,
      payload: this.getPayload(status, exception),
      error: true,
      url,
      method,
    };
    if (!error_response.payload.includes('starting at object')) {
      Logger.log(`${method} ${status} ${url}`, 'CustomErrorHandler');
      console.error(exception);
    }
    res.status(status).json(error_response);
  }
}
