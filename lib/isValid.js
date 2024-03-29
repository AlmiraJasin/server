class IsValid {
    static email(str) {
        if (typeof str !== 'string'
            || str === '') {
            return [true, 'Email turi buti ne tuscias tekstas'];
        }

        if (!str.includes('@')) {
            return [true, 'Email turi tureti @ simboli'];
        }

        return [false, 'OK'];
    }

    static password(str) {
        if (typeof str !== 'string'
            || str === '') {
            return [true, 'Password turi buti ne tuscias tekstas'];
        }
        return [false, 'OK'];
    }
}

export { IsValid }