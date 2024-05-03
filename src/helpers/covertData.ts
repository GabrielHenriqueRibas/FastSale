const convertData = (oldData: any) => {
    const newData: Array<any> = [];
  
    const brand = new Set(oldData.map((od: any) => od.brand));
  
    brand.forEach((c: any) => {
      newData.push({
        title: c,
        data: oldData.filter((od: any) => od.brand == c),
      });
    });
  
    return newData;
  };
  
  export default convertData;