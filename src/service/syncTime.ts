/**
 * @file [TimeResponse]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-09-28 23:33:22
 */
interface TimeResponse {
    value: string; // 当前的时间，为2019-07-08T07:05:34.944Z格式
}
interface TimeResponseError{
    message: string;
}
const syncTime = (): Promise<TimeResponse|TimeResponseError> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isError = Math.random() < 0.3;
            isError ? reject({
                message: '请求超时',
            }) : resolve({
                value: (new Date()).toISOString(),
            });
        }, 800);
    });
};

export default syncTime;