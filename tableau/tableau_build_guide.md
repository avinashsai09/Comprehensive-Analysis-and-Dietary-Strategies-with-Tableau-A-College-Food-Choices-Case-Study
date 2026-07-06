# Tableau Build Guide

## 1. Connect Data

1. Open Tableau Public/Desktop.
2. Choose **Text File** and select `data/college_food_choices_final.csv`.
3. Confirm 120 rows and 41 columns are loaded.
4. Validate data types: numeric survey scales as Number (whole), GPA as Number (decimal), text categories as String.

## 2. Data Readiness Checks

- No blank student IDs.
- No missing values in GPA, gender, breakfast, health category, fruit day, vegetables day, vitamins, exercise, eating out, or cooking frequency.
- Survey scale fields use consistent coded ranges.
- Categorical labels are standardized: `female/male`, `Healthy/Unhealthy`, comfort-food reasons, and breakfast categories.

## 3. Calculated Fields

### Consumption
```tableau
IF [Parameter 2] = "veggies_day" THEN [veggies_day]
ELSEIF [Parameter 2] = "vitamins" THEN [vitamins]
ELSE [fruit_day]
END
```

### Food Selection
```tableau
IF [Parameter 3] = "thai_food" THEN [thai_food]
ELSEIF [Parameter 3] = "italian_food" THEN [italian_food]
ELSEIF [Parameter 3] = "persian_food" THEN [persian_food]
ELSEIF [Parameter 3] = "greek_food" THEN [greek_food]
ELSE [indian_food]
END
```

## 4. Parameters

- Parameter 2: `veggies_day`, `vitamins`, `fruit_day`.
- Parameter 3: `thai_food`, `italian_food`, `persian_food`, `greek_food`, `indian_food`.

## 5. Worksheets

1. KPI Summary Card: Count of GPA, Avg GPA, Avg weight, Avg grade level.
2. Breakfast Consumption: breakfast by count of students, optionally filtered by gender.
3. Eating Out vs Cooking Frequency: dual line view using eating_out and cook.
4. Health Category by Gender: grouped bar chart using health_category and gender.
5. Vitamins Consumption by Gender: line chart using Consumption and gender.
6. Health vs Greek Food Consumption: grouped bars using health_category and Food Selection.
7. People Feeling Healthy and Life Rewarded: packed bubble chart using healthy_feeling and life_rewarding.
8. Weight vs Exercise Frequency: treemap using weight and exercise count.
9. Comfort Food Reasons: packed bubble chart using comfort_food_reason.

## 6. Dashboard

Create a dashboard named **Food Choice Analysis** and combine the KPI card, breakfast, health vs food, vitamins, weight vs exercise, eating out vs cooking, and comfort food reasons. Add Parameter 2 and Parameter 3 controls for interactive filtering.

## 7. Story

Create story points in this order:

1. Comfort food reasons reveal emotional and boredom-driven eating.
2. Breakfast and balanced food routines support focus.
3. Health category differs across gender groups.
4. Life rewarding and healthy feeling show student wellbeing distribution.
5. Dashboard summary presents intervention opportunities.
