import { Body, Controller, Post } from '@nestjs/common';
import jwt from 'jsonwebtoken';
@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    const user = { id: 'u1', email: body.email || 'admin@loptorres.com', name: 'Administrador', role: 'Administrador' };
    const accessToken = jwt.sign(user, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '8h' });
    return { accessToken, user, permissions: ['*'] };
  }
  @Post('google') google(@Body() body: { email: string }) { return this.login({ email: body.email, password: '' }); }
}
