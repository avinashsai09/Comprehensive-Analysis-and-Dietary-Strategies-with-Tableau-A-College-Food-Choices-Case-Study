# Comprehensive Analysis and Dietary Strategies with Tableau: A College Food Choices Case Study

## 1. Introduction

This applied analytics project explores dietary habits, academic performance, and lifestyle choices among college students. The goal is to transform survey data into meaningful Tableau visuals that help students, cafeteria managers, nutritionists, and university support teams make evidence-based wellness decisions.

## 2. Problem Statement

College students often face irregular schedules, stress, limited food budgets, and academic pressure. These factors can lead to skipped breakfast, frequent fast-food consumption, low fruit and vegetable intake, and stress-related comfort eating. The project investigates these patterns and presents actionable dietary strategies through Tableau dashboards and a guided story.

## 3. Dataset Acquisition

The finalized dataset is saved as `data/college_food_choices_final.csv`. It contains 120 student records across 41 variables covering GPA, gender, grade level, weight, breakfast choices, calorie awareness, comfort-food reasons, exercise, cooking frequency, eating out frequency, cuisine preferences, fruit and vegetable intake, vitamin consumption, and health category.

## 4. Data Preparation

The data preparation phase focused on cleaning, structuring, and validating the dataset before Tableau import. Null values were removed, categorical labels were standardized, survey scale fields were kept numeric, and calculated analytical fields were mapped for dashboard use. The dataset was verified as complete and ready for visualization.

## 5. Tableau Calculated Fields

Two calculated fields were used for dynamic analysis. `Consumption` switches between vegetables per day, vitamins, and fruit per day using Parameter 2. `Food Selection` switches between Thai, Italian, Persian, Greek, and Indian food preference scores using Parameter 3.

## 6. Visualizations Created

The Tableau workbook includes a KPI summary card, breakfast consumption bar chart, eating out versus cooking frequency line chart, health category by gender grouped bar chart, vitamins consumption by gender line chart, health versus food consumption grouped bar chart, healthy feeling and life rewarding bubble chart, weight versus exercise treemap, and comfort food reasons bubble chart.

## 7. Dashboard Integration

The dashboard integrates all major visuals into a single Food Choice Analysis canvas. Parameter controls allow users to filter by consumption type and food category. This makes the dashboard useful for comparing student subgroups and identifying behavior patterns quickly.

## 8. Story Development

The Tableau Story presents findings as a guided narrative. It begins with comfort-food reasons, then moves to breakfast and dietary patterns, health categories, life satisfaction indicators, and finally the combined dashboard. This structure makes the analysis accessible to non-technical users.

## 9. Key Insights

Students who maintain regular breakfast habits and balanced diets generally show stronger indicators of health and academic focus. Comfort-food consumption is strongly connected with boredom, sadness, and stress. Fruit and vegetable consumption is comparatively low, while eating out remains common. These findings support cafeteria improvements such as salad bars, affordable balanced meal combos, and healthier late-evening options.

## 10. Recommendations

Students should be encouraged to eat quick nutritious breakfasts, reduce late-night junk food, and choose fruits or home-cooked meals during stressful periods. Universities can support these behaviors through awareness campaigns, nutrition counseling, and cafeteria menu redesign. Cafeteria managers should increase access to fresh produce, balanced meal combos, and clearly labeled calorie-aware choices.

## 11. Conclusion

The project demonstrates how Tableau can convert student food-choice data into practical insights. By connecting dietary patterns with wellbeing and academic focus, the dashboard and story provide a clear foundation for student wellness interventions.
