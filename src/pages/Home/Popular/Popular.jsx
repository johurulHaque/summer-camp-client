import PopularCard from './PopularCard';
import useAllClasses from '../../../hooks/useAllClasses';


const Popular = () => {
    const [classes] = useAllClasses();    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 md:mt-6'>
            {
                classes.slice(0,6).map((sport,indx) => <PopularCard key={indx} sport={sport}></PopularCard>)
            }

            
        </div>
    );
};

export default Popular;