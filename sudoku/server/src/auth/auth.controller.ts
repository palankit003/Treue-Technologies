import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService, private jwtService: JwtService) {}
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login (@Request() req) {
        const {username, _id} = req.usrer
        const payload = {username, sub: _id};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
