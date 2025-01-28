import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WalletAccountService } from './walletaccountservice.service';

describe('WalletAccountService', () => {
  let service: WalletAccountService;
  let httpMock: HttpTestingController; 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [WalletAccountService], 
    });
    service = TestBed.inject(WalletAccountService);
    httpMock = TestBed.inject(HttpTestingController); 
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
