// this libaray is created by Naveen Sharma

export const addElipsis = (str, limit, elip="...") => {
    return str.length > limit ? str.substring(0, limit) + `${elip}` : str;
}