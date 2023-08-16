export const textSlice = (text: string, maxLength: number) => {
    if (maxLength == 65 && text.length >= 65)
        {
            return text.slice(0, maxLength) + '...';
        }
    if (maxLength == 20 && text.length >= 20)
        {
            return text.slice(0, maxLength) + '...';
        }
        else
            {return text}
}