export const isExist = (data)=>{
  return data !== undefined;
}

export const isNumber = (data)=>{
  return data !== undefined && typeof data === 'number';
}

export const isString = (data)=>{
  return data !== undefined && typeof data === 'string';
}

export const isNumberString = (data)=>{
  const parsedData = Number(data);
  return !isNaN(parsedData) && typeof parsedData === 'number';
}

export const isValidObject = (data)=>{
  return data !== undefined && typeof data === 'object';
}

export const isValidArrayWithContent = (data) => {
  return (data !== undefined && typeof data === 'object' && data.length &&  data.length > 1);
}

