// *******Esta función filtra la data por director*******
export function filtrarDirector (directorName,data) {
  const filtrarData = data.filter(function(datoAFiltrar){
    return datoAFiltrar.director === directorName;
  })
return filtrarData;
// console.log(filtrarData)
}
export function filtrarProductor (productorName,data) {
  const filtrarData2 = data.filter (function(datoAFiltrar2){
    return datoAFiltrar2.producer === productorName ;
  })
return filtrarData2
}
//****Esta Funcion Organiza la Data por Fecha de Lanzamiento *******

export function ordenPeliculas (opcion,data){
  const copiaData = [...data]
  const ordenAZ  = copiaData.sort (function(a,b){
      if (a.director > b.director){
        return 1;
      }
      if (a.director < b.director){
        return -1;
      }
      return 0;
      })
    if(opcion=="AZ"){
      return ordenAZ
    }else{
      return ordenAZ.reverse()
    }
    }
  
  
