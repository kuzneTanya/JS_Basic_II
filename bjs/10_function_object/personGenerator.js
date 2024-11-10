const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Анна",
            "id_2": "Александра",
            "id_3": "Евгения",
            "id_4": "Мария",
            "id_5": "Дарья",
            "id_6": "Елена",
            "id_7": "Татьяна",
            "id_8": "Софья",
            "id_9": "Ирина",
            "id_10": "Марина"
        }
    }`,
    jobMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "слесарь",
            "id_2": "сантехник",
            "id_3": "инженер",
            "id_4": "учитель",
            "id_5": "программист",
            "id_6": "музыкант",
            "id_7": "физик",
            "id_8": "водитель",
            "id_9": "шахтер",
            "id_10": "бизнесмен"
        }
    }`,
    jobFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "модель",
            "id_2": "актриса",
            "id_3": "инженер",
            "id_4": "учитель",
            "id_5": "продавец",
            "id_6": "горничная",
            "id_7": "физик",
            "id_8": "программист",
            "id_9": "бухгалтер",
            "id_10": "бизнесвумен"
        }  
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        return (gender == this.GENDER_MALE) ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);
    },


    randomSurname: function(gender) {
        return (gender == this.GENDER_MALE) ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'а';
    },

    randomGender: function() {
        const gender = this.randomIntNumber();
        return (gender === 1) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomDateOfBirth: function() {
        return this.randomIntNumber(2024, 1924);
    },

    randomLastName: function(gender) {
        const name = this.randomValue(this.firstNameMaleJson);
        if (name[name.length-1] === 'й') {
            return (gender === this.GENDER_MALE) ? name.replace('й', '') + 'евич' : name.replace('й', '') + 'евна';
        } else if (name[name.length-1] === 'а') {
            return (gender === this.GENDER_MALE) ? name.replace('а', '') + 'ович' : name.replace('а', '') + 'овна';
        } else return (gender === this.GENDER_MALE) ? name + 'ович' : name + 'овна';
    },

    randomJob: function(gender) {
        return (gender == this.GENDER_MALE) ? this.randomValue(this.jobMaleJson) : this.randomValue(this.jobFemaleJson);
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.dateOfBirth = this.randomDateOfBirth();
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.lastName = this.randomLastName(this.person.gender);
        this.person.job = this.randomJob(this.person.gender);
        return this.person;
    }
};
