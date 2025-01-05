   return values.map(value => {
     for (let i = 0; i < extendedThresholds.length; i++) {
       if (value < extendedThresholds[i]) {
         return `Value ${value} is in bucket ${i - 1}`;
       }
     }
     return `Value ${value} exceeds all thresholds`;
   });
   