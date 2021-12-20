import { Like } from "typeorm";
import { v4 as uuidv4,  stringify as uuidStringify, parse as uuidParse } from 'uuid';

export const slugfy = (str) => {
    str = str.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();
  
    var from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaaaeeeeiiiioooouuuunc------";
  
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
  
    str = str
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
  
    return str;
}

export const sanitize = (obj) => {
  delete obj.password;
  delete obj.token;
  delete obj.remember_token;

  return obj;
}

export const like = (query) => {
  const white_list = ['id', 'user_id', 'notification_id']
  return Object.entries(query).reduce((acc, [field, value]) => {
    if(white_list.includes(field)) {
        const string = uuidParse(value)
        const uuid_string = uuidStringify(string)
        return {
          ...acc,
          [field]: uuid_string
        }
    }

    return {
      ...acc,
      [field]: Like(`%${value}%`)
    }
  }, {})
}