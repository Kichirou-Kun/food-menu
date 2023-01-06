import React from "react";
import { MealItemType } from "../../typing";
import Grid from "../../ui/Grid";
import Typography from "../../ui/Typography";
interface Props {
  item: MealItemType;
}
const MealItem = ({ item }: Props) => {
  const { title, desc, price, img } = item;
  return (
    <Grid container className="gap-3">
      <Grid
        item
        className="lg:col-span-5 md:col-span-6 h-[240px] lg:h-[200px] col-span-12 p-2 rounded bg-BOX_BG"
      >
        <img
          src={img}
          alt={title || "mealitem"}
          className="w-full h-full object-cover rounded"
        />
      </Grid>
      <Grid item className="lg:col-span-7 md:col-span-6 col-span-12">
        <div className="flex flex-row items-center justify-between py-3 border-b">
          <Typography variant="h5" className="text-DARK_BLUE capitalize">
            {title}
          </Typography>
          <Typography className="text-MAIN_COLOR">$ {price}</Typography>
        </div>
        <Typography className="text-md text-gray-600 py-3">{desc}</Typography>
      </Grid>
    </Grid>
  );
};

export default MealItem;
