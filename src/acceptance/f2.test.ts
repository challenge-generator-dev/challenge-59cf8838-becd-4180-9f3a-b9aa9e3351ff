import { Request, Response, NextFunction } from 'express';
import { validationMiddleware, ProductIdSchema, PaginationQuerySchema } from '../middlewares/validation.middleware';

describe('ValidationMiddleware - Phase f2', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockReq = {
      body: {},
      params: {},
      query: {},
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
  });

  describe('should return 400 when product ID is invalid', () => {
    it('given a Zod schema that validates UUIDs and an invalid ID in params, when the middleware is called with an invalid ID, then it returns 400 with validation details', () => {
      mockReq.params = { id: 'not-a-valid-uuid' };
      
      const middleware = validationMiddleware(ProductIdSchema);
      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Validation failed',
          details: expect.arrayContaining([
            expect.stringContaining('id'),
          ]),
        })
      );
      expect(mockNext).not.toHaveBeenCalled();
    });
  });

  describe('should call next when product ID is valid', () => {
    it('given a Zod schema that validates UUIDs and a valid ID in params, when the middleware is called with a valid ID, then it calls next() without errors', () => {
      mockReq.params = { id: '123e4567-e89b-12d3-a456-426614174000' };
      
      const middleware = validationMiddleware(ProductIdSchema);
      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
      expect(mockRes.status).not.toHaveBeenCalled();
    });
  });

  describe('should return 400 when pagination params are invalid', () => {
    it('given a Zod schema that validates pagination params and invalid values, when the middleware is called with page=-1 or limit=0, then it returns 400 with validation details', () => {
      mockReq.query = { page: '-1', limit: '0' };
      
      const middleware = validationMiddleware(PaginationQuerySchema);
      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Validation failed',
        })
      );
      expect(mockNext).not.toHaveBeenCalled();
    });
  });
});