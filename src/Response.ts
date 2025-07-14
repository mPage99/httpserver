import {RequestObjI} from "./Request";

export function generateResponse(request: RequestObjI) {
    let statusLine = `${request.requestLine.version} 200 OK`;
    let content = `Valid Route: ${request.requestLine.path}\n` // what the client receives
    let contentType = 'text/plain';
    let contentLength = content.length.toString()

    return `${statusLine}\r\nContent-Type: ${contentType}\r\nContent-Length: ${contentLength}\r\n\r\n${content}`
}

export function InvalidRequest(request: RequestObjI) {
    let statusLine = `${request.requestLine.version} 404`;
    let content = `Route Not Found: ${request.requestLine.path}\n` // what the client receives
    let contentType = 'text/plain';
    let contentLength = content.length.toString()

    return `${statusLine}\r\nContent-Type: ${contentType}\r\nContent-Length: ${contentLength}\r\n\r\n${content}`
}