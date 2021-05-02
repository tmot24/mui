import {CoffeeCard} from "./coffeeCard";
import {Grid} from "@material-ui/core";

export const Content = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CoffeeCard
                        avatar={"https://free-png.ru/wp-content/uploads/2020/10/coke-809b3caa.png"}
                        title={"Coca-cola"}
                        subtitle={"9,99"}
                        description={"The Coca-Cola Company — американская пищевая компания, крупнейший мировой производитель и поставщик концентратов, сиропов и безалкогольных напитков."}
                        image={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png"}
                    />
                </Grid>
            </Grid>

        </div>
    );
};