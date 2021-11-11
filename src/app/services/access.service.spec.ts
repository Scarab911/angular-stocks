import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import {AccessService} from "./access.service";

describe('tikrinam AccessService metodus', () => {
    let service: AccessService;

    let mockHttpClient = {
        post: () => {}
    };

    let mockRouter = {};

    beforeEach(() => {
    service = new AccessService(mockHttpClient as unknown as HttpClient);
    });

    it('should set token', () => {
        let mockToken = 'xxx.tokenData.yyy';

        service.getToken(mockToken);

        expect(service.token).toBe(mockToken);
    }
    );

    it('should return token undefined on logout', () => {
        let sessionStorage = {};

        const removeSpy = spyOn(window.sessionStorage, 'removeItem');
        service.LogOut();
        expect(removeSpy).toHaveBeenCalledWith('token');
    });

    it('should call Http POST function to login user', () => {
        const spy = spyOn(mockHttpClient, "post");

        const mockUserData: User = {
            username: 'mock-user-name',
            password: 'mock-user-passsword^'
        };

        service.login(mockUserData);

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);

    });
});