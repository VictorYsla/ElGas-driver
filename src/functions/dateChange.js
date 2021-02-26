import moment from "moment";

export const milisegundos = (date = "YYYY-MM-DD") => {
  const milisegundos = moment(moment(date).format("YYYY-MM-DD")).valueOf();
  return milisegundos;
};

export const datePickerChange = (datePaid) => {
  const dateI =
    typeof datePaid.FechaInicial === "string"
      ? datePaid.FechaInicial.replace(/-/g, ",")
      : datePaid.FechaInicial;

  const dateF =
    typeof datePaid.FechaFinal === "string"
      ? datePaid.FechaFinal.replace(/-/g, ",")
      : datePaid.FechaFinal;

  const ini = Math.round(new Date(dateI).getTime());
  const fin = Math.round(new Date(dateF).getTime());

  const FechaInicial = moment(datePaid.FechaInicial).format("DD/MM/YYYY");
  const FechaFinal = moment(datePaid.FechaFinal).format("DD/MM/YYYY");
  const FechaValueInicial = moment(datePaid.FechaInicial).format("YYYY-MM-DD");
  const FechaValueFinal = moment(datePaid.FechaFinal).format("YYYY-MM-DD");

  // const FechaIncial: `${dayI}-${monthI + 1}-${yearI}`;
  // const FechaFinal: `${dayF}-${monthF + 1}-${yearF}`;

  return {
    ini,
    fin,
    FechaInicial,
    FechaFinal,
    FechaValueInicial,
    FechaValueFinal,
  };
};

export const dateDataBaseChange = (anyDate) => {
  const fecha =
    typeof anyDate === "string" ? anyDate.replace(/-/g, ",") : anyDate;
  const milisegundos = new Date(fecha).getTime();
  const diaMesAño = moment(milisegundos).format("DD/MM/YYYY");

  return { milisegundos, diaMesAño };
};
