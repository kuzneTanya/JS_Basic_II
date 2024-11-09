const personGenerator = {
    surnameJson: `{  
        "count": 15,
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

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }

    },


    randomSurname: function(gender) {
        if (gender === this.GENDER_MALE)
            return this.randomValue(this.surnameJson);
        else {
            return this.randomValue(this.surnameJson) + 'а';
        }

    },

    randomGender: function() {
        const gender = this.randomIntNumber();
        if (gender === 1)
            return this.GENDER_MALE;
        else return this.GENDER_FEMALE; 
    },

    randomDateOfBirth: function() {
        return this.randomIntNumber(1924, 2024);
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.dateOfBirth = this.randomDateOfBirth();
        this.person.surname = this.randomSurname(this.person.gender);
        return this.person;
    }
};
