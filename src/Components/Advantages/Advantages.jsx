import consultation from '../../img/consultation.png';
import contract from '../../img/contract.png';
import delivery from '../../img/delivery.png';
import quality from '../../img/high-quality.png';
import leave from '../../img/leave.png';
import service from '../../img/icon-service.png';
import { ContainerAdvantages, ImagesAdvantages, ItemAdvantages, ListAdvantages, TitleAdvantages } from './Advantages.styled';

const iconsData = [
    {
        "name": "Безкоштовна консультація",
        "width": 72,
        "height": 72,
        "svg": consultation
    },
    {
        "name": "Працюємо за договором",
        "width": 72,
        "height": 72,
        "svg": contract
    },
    {
        "name": "Гарантія до 5 років",
        "width": 72,
        "height": 72,
        "svg": quality
    },
    {
        "name": "Безкоштовна доставка",
        "width": 72,
        "height": 72,
        "svg": delivery
    },
    {
        "name": "Безкоштовний виїзд на замір",
        "width": 72,
        "height": 70,
        "svg": leave
    },
    {
        "name": "Обслуговування та монтаж",
        "width": 72,
        "height": 70,
        "svg": service
    }
]

const Advantages = () => {
    return (
        <ContainerAdvantages>
            <ListAdvantages>
                {iconsData.map(({ name, svg }) => (
                    <ItemAdvantages key={name}>
                        <ImagesAdvantages src={svg} alt={name} />
                        <TitleAdvantages>{name}</TitleAdvantages>
                    </ItemAdvantages>
                ))}
            </ListAdvantages>
        </ContainerAdvantages>
    )
}

export default Advantages; 