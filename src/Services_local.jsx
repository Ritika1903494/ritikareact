


    export const setData=(key,value) =>{
        try{
            localStorage.setItem(key,JSON.stringify(value));
            return true;
        }
        catch{
            console.log("data is not added");
        }

    }

    export const getData=(key) =>{
        try{
            const data = localStorage.getItem(key);
            const final_data = JSON.parse(data);
            return final_data;
        }
        catch{
          console.log("data is not present in given key");
        }
    }

  

