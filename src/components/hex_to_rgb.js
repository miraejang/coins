const hexToRgb = colorHex => {
  let hex = colorHex.replace('#', '');
  const code = [];

  const changeToNum = x => {
    return x.match(/\d/) ? x : x.toUpperCase().charCodeAt() - 55;
  };

  if (hex.length === 3) {
    for (let i = 0; i < 3; i++) {
      hex += `${hex[i].repeat(2)}`;
    }
  }

  for (let i = 1; i < 4; i++) {
    const a = changeToNum(hex[i * 2 - 2]);
    const b = changeToNum(hex[i * 2 - 1]);
    code.push(a * 16 + b * 1);
  }

  return `${code.join(', ')}`;
};

export default hexToRgb;
