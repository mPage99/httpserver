// interface for requests
export interface RequestObjI {
    requestLine: {
        method?: string,
        path?: string,
        version?: string
    },
    headers: {
        host?: string,
        userAgent?: string,
        accept?: string
    }
}


let requestArr = ['a', 'b', 'c'];
export class RequestObj implements RequestObjI {

    requestLine: {
        method: string | undefined
        path: string | undefined
        version: string | undefined
    }

    headers: {
        host: string | undefined,
        userAgent: string | undefined,
        accept: string | undefined
    }

    constructor(requestData: string[]) {
        const requestArr = requestData[0].split(" ");

        this.requestLine = {
            method: requestArr[0],
            path: requestArr[1],
            version: requestArr[2]
        }

        this.headers = {
            host: undefined,
            userAgent: undefined,
            accept: undefined
        }

        // Separate header key : values
        let headerArr: string[][] = []
        for (let i = 1; i < requestData.length; i++) {
            headerArr.push(requestData[i].split(": "));
        }

        // parse headers into the RequestObj
        headerArr.forEach((header) => {
            switch (header[0]) {
                case 'Host':
                    this.headers.host = header[1];
                    break;
                case 'User-Agent':
                    this.headers.userAgent = header[1];
                    break;
                case 'Accept':
                    this.headers.accept = header[1];
                    break;
                default:
                    console.log(`unknown header: ${header[0]}`);
            }
        })
    }
}