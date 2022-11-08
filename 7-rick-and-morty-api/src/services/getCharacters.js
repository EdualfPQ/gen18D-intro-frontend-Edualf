const getCharacter = async (name) => {
    // setLoading(true)
    try{
        const res = await fetch('https://rickandmortyapi.com/api/character/?name=rick&status=alive');

        if(!res.ok){
            console.log(res);
            return Swal.fire({
                tittle: '',
                rext: '',
                icon: ''
            })
        }
        const data = await res.json();
        console.log([...data.results]);
        setCharacter([...data.results]);
    }catch(error){
        console.log(error)
        return Swal.fire({
            tittle: '',
            rext: '',
            icon: ''
        })
    }finally{
        setLoading(false);
    }
}