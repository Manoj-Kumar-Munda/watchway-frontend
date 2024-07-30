export function bytesToMegabytes(bytes) {
    if(bytes < 1024*1024){
        return ` ${Math.round(bytes/1024)} KB`;
    }
    const megabytes = Math.round( ( bytes / (1024 * 1024)));
    return `${megabytes} MB`;
}