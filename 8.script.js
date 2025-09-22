class PerminentEmployee {
    getBonus() {
        return 10000;
    }
    getPromotionName() {
        return "Managaer";
    }
    NoticePeriod() {
        console.log("3 months notice period");
    }
}
class ContractEmployee {
    NoticePeriod() {
        console.log("1 month notice period");
    }
}
//i have agreed this IEmpService contract so now tell me what kind of members i have to implement??
class FreelancerEmployee {
    NoticePeriod() {
        console.log("Freelancer do't have notice period");
    }
    getBonus() {
        return 0;
    }
}
