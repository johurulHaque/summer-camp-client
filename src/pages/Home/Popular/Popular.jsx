import PopularCard from './PopularCard';
import useAllClasses from '../../../hooks/useAllClasses';


const Popular = () => {
    const [classes] = useAllClasses();   
    const approvedClass = classes.filter(cls => cls.status ==="approved") 
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
            {
                approvedClass.slice(0,6).map((sport,indx) => <PopularCard key={indx} sport={sport}></PopularCard>)
            }

            
        </div>
    );
};

export default Popular;