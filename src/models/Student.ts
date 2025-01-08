export class Student {
    id: string;
    name: string;
    patronymic: string;
    lastname: string;
    birthdate: Date ;
    yearOfEnter: number;
    faculty: string;
    gender: 'male' | 'female';

    constructor(
        name: string,
        patronymic: string,
        lastname: string,
        birthdate: Date,
        yearOfEnter: number,
        faculty: string,
        gender: 'male' | 'female'
    ) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.patronymic = patronymic;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.yearOfEnter = yearOfEnter;
        this.faculty = faculty;
        this.gender = gender;
    }

    get fullName(): string {
        return `${this.lastname} ${this.name} ${this.patronymic}`;
    }

    get formattedBirthDate(): string {
        return `${this.birthdate.getDate().toString().padStart(2, '0')}.${(this.birthdate.getMonth() + 1).toString().padStart(2, '0')}.${this.birthdate.getFullYear()}`;
    }

    get age(): string {
        const today = new Date();
        const birthDate = this.birthdate;
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        const suffix = this.getAgeSuffix(age);
        return `${age} ${suffix}`;
    }

    private getAgeSuffix(age: number): string {
        const lastDigit = age % 10;
        const lastTwoDigits = age % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return 'лет';
        }

        switch (lastDigit) {
            case 1:
                return 'год';
            case 2:
            case 3:
            case 4:
                return 'года';
            default:
                return 'лет';
        }
    }

    get yearsOfStudy(): string {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        // const currentDate = today.getDate();

        const endYear = this.yearOfEnter + 5;
        // const startDate = new Date(this.yearOfEnter, 8, 1);
        const endDate = new Date(endYear, 8, 1);

        if (today >= endDate) {
            const graduationText = this.gender === 'male' ? 'Окончил' : 'Окончила';
            return `${graduationText} обучение: ${this.yearOfEnter} - ${endYear}`;
        }

        const yearsPassed = currentYear - this.yearOfEnter;
        const monthsPassed = currentMonth - 8;

        if (monthsPassed >= 0) {
            return `Учится ${yearsPassed + 1} курс (поступление: ${this.yearOfEnter} год)`;
        } else {
            return `Учится ${yearsPassed} курс (поступление: ${this.yearOfEnter} год)`;
        }
    }
}
