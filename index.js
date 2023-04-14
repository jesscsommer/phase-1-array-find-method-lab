// code your solution here
function isWin(record){
    return record.result === 'W';
  }
  
  function superbowlWin(record){
    record.find(isWin);
    if (record.find(isWin)) {
        return (record.find(isWin).year)
    }
  }