const useLocal = {
    save:function(fieldName, data){
      localStorage.setItem(fieldName, JSON.stringify(data))
    },
    get:function(fieldName){
      return JSON.parse(localStorage.getItem(fieldName));
    },
    clear:function(){
      localStorage.clear();
    }
}

export {useLocal};
