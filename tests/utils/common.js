
 function GetRandomEmail() {
    return (
      "t" +
      Math.random()
        .toString(20)
        .replace(/[^a-z][0-9,A-Z]+/g, "") +
      "@uipath-qa.com"
    );
  }

  console.log(GetRandomEmail())