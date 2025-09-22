interface IBonusServce {
  getBonus(): number;
}

interface IPromotionService {
  getPromotionName(): string;
}

interface IEmpNoticePeriod {
  NoticePeriod(): void;
}

interface IEmpService_1 extends IBonusServce , IEmpNoticePeriod  {}

class PerminentEmployee implements IBonusServce, IPromotionService, IEmpNoticePeriod
{
  getBonus(): number {
    return 10000;
  }
  getPromotionName(): string {
    return "Managaer";
  }
  NoticePeriod(): void {
    console.log("3 months notice period");
  }
}

class ContractEmployee implements IEmpNoticePeriod {
  NoticePeriod(): void {
    console.log("1 month notice period");
  }
}

//i have agreed this IEmpService contract so now tell me what kind of members i have to implement??
class FreelancerEmployee implements IEmpService_1{
    NoticePeriod():void{
        console.log("Freelancer do't have notice period")
    }
     getBonus():number{
        return 0;
     }
}
