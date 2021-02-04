class CouponService {
    private static instance: CouponService;

    private coupons: number[] = [];

    constructor() {
      this.generateCoupons();
    }

    static getInstance(): CouponService {
      if (!CouponService.instance) {
        CouponService.instance = new CouponService();
      }
      return CouponService.instance;
    }

    list(): number[] {
      return this.coupons;
    }

    getCoupons(algorithmName: string, amountString: string): number[] {
      const amount: number = Number(+amountString);

      return this.list();
    }

    private generateCoupons(): void {
      for (let i = 0; i < 25; i++) {
        this.coupons.push(i);
      }
    }
}

export default CouponService.getInstance();
