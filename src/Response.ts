import {RequestObjI} from "./Request";

export function generateResponse(request: RequestObjI) {
    let statusLine = `${request.requestLine.version} 200 OK`;
    let content = `request path: ${request.requestLine.path}`
    let contentType = 'text/plain';
    let contentLength = content.length.toString()

    return (
    `${statusLine}\r\nContent-Type: ${contentType}\r\nContent-Length: ${contentLength}\r\n\r\n${content}`
    )
}