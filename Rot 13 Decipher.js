function rot13(str) {
  var StrArray = str.split("");

  for (let i = 0; i < StrArray.length; i++)
  {
    if (StrArray[i] == "R")
    {
      StrArray[i] = "E";
    }
    else if (StrArray[i] == "G")
    {
      StrArray[i] = "T";
    }
    else if (StrArray[i] == "N")
    {
      StrArray[i] = "A";
    }
        else if (StrArray[i] == "O")
    {
      StrArray[i] = "B";
    }
        else if (StrArray[i] == "V")
    {
      StrArray[i] = "I";
    }
        else if (StrArray[i] == "A")
    {
      StrArray[i] = "N";
    }
        else if (StrArray[i] == "S")
    {
      StrArray[i] = "F";
    }
        else if (StrArray[i] == "E")
    {
      StrArray[i] = "R";
    }
        else if (StrArray[i] == "U")
    {
      StrArray[i] = "H";
    }
        else if (StrArray[i] == "Y")
    {
      StrArray[i] = "L";
    }
        else if (StrArray[i] == "Q")
    {
      StrArray[i] = "D";
    }
        else if (StrArray[i] == "P")
    {
      StrArray[i] = "C";
    }
        else if (StrArray[i] == "H")
    {
      StrArray[i] = "U";
    }
        else if (StrArray[i] == "Z")
    {
      StrArray[i] = "M";
    }
        else if (StrArray[i] == "S")
    {
      StrArray[i] = "F";
    }
        else if (StrArray[i] == "C")
    {
      StrArray[i] = "P";
    }
        else if (StrArray[i] == "T")
    {
      StrArray[i] = "G";
    }
        else if (StrArray[i] == "J")
    {
      StrArray[i] = "W";
    }
        else if (StrArray[i] == "L")
    {
      StrArray[i] = "Y";
    }
        else if (StrArray[i] == "B")
    {
      StrArray[i] = "O";
    }
        else if (StrArray[i] == "V")
    {
      StrArray[i] = "I";
    }
        else if (StrArray[i] == "X")
    {
      StrArray[i] = "K";
    }
        else if (StrArray[i] == "W")
    {
      StrArray[i] = "J";
    }
        else if (StrArray[i] == "D")
    {
      StrArray[i] = "Q";
    }
        else if (StrArray[i] == "M")
    {
      StrArray[i] = "Z";
    }
    else if (StrArray[i] == "I")
     {
      StrArray[i] = "V";
    }
    else if (StrArray[i] == "F")
    {
      StrArray[i] = "S";
    }
    else if (StrArray[i] == "K")
    {
      StrArray[i] = "X";
    }
  }
  var output = StrArray.join("");

  return output;
}

rot13("SERR PBQR PNZC");
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));