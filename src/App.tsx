import MealItem from "./components/MealItem";
import items from "./data";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Grid from "./ui/Grid";
import Typography from "./ui/Typography";
import React from "react";

const newArr: any = new Set<string | any>(items.map((item) => item.category));
const allCategories = ["all", ...newArr];

function App() {
  const [menuItems, setMenuItems] = React.useState(items);
  const [cat, setCat] = React.useState<string>("all");

  const filterMeals = (category: string) => {
    setCat(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  return (
    <main>
      <Container>
        <Typography
          variant="h2"
          className="text-DARK_BLUE capitalize text-center my-10"
        >
          Food Menu
        </Typography>

        <div className="flex flex-row justify-center items-center mb-10">
          {allCategories.map((category, i) => {
            const active = cat === category;
            return (
              <Button
                key={i}
                onClick={() => filterMeals(category)}
                className={`bg-MAIN_COLOR ${
                  !active ? "bg-opacity-10" : ""
                } rounded-none text-DARK_BLUE hover:text-opacity-80 transition-opacity ease-linear duration-150`}
                size="large"
              >
                {category}
              </Button>
            );
          })}

          {/* <Button
            className="bg-MAIN_COLOR bg-opacity-10 rounded-none text-DARK_BLUE hover:text-opacity-80 transition-opacity ease-linear duration-150"
            size="large"
          >
            Breakfast
          </Button>
          <Button
            className="bg-MAIN_COLOR bg-opacity-10 rounded-none text-DARK_BLUE hover:text-opacity-80 transition-opacity ease-linear duration-150"
            size="large"
          >
            Lunch
          </Button>
          <Button
            className="bg-MAIN_COLOR bg-opacity-10 rounded-none text-DARK_BLUE hover:text-opacity-80 transition-opacity ease-linear duration-150"
            size="large"
          >
            Shakes
          </Button> */}
        </div>

        <Grid container className="gap-6">
          {menuItems.map((item) => (
            <Grid key={item.id} item className=" lg:col-span-6 col-span-12">
              <MealItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default App;
