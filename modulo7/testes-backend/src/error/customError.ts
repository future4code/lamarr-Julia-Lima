export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Invalid Name")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Invalid Email")
    }
}

export class InvalidRole extends CustomError{ 
    constructor(){
        super(400, "Invalid Role")
    }
}