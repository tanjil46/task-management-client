

const Showunique = ({review}) => {
    const{name,benefit,task}=review
    return (
        <div className="bg-slate-600 text-white text-center my-6 w-full h-[200px] space-y-4 rounded-lg p-3">
            <p className="text-xl text-cyan-500">Name Of Platform:{name}</p>
            <p>Banefit:{benefit}</p>
            <p>{task}</p>
        </div>
    );
};

export default Showunique;