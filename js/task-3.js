 function getElementWidth(content, padding, border) {
        const   a = content.replace("px", ""),
                b = padding.replace("px", ""),
                c = border.replace("px", "");

     console.log(a, b, c);
     const elementWidth = Number(a) + Number(b) + Number(c);
     console.log(elementWidth);
    }

    
console.log(getElementWidth("50px", "8px", "4px")); // 62
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
