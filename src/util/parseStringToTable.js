import React from 'react';

const parseStringToTable = (data) => {
  let parsedTabularMessage = "";

  parsedTabularMessage = data.split('\n').map((item, key) => {
    return (
      <tr key={key}>
        {item.split('\t').map((item, key) => {
          return (
            <td key={key}>
              {item}
            </td>
          )
        })}
      </tr>
    )
  });

  return <table> {parsedTabularMessage} </table>;
}

export default parseStringToTable;
