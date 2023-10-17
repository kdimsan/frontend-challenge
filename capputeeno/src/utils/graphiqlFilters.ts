import { FilterType } from "@/types/filterTypes";
import { PriorityType } from "@/types/priorityType";

export function getCategoryByType(type: FilterType) {
  if (type === FilterType.MUG) return "mugs";
  if (type === FilterType.SHIRT) return "t-shirts";
  return "";
}

export function getFieldByPriority(priority: PriorityType) {
  if (priority === PriorityType.NEW)
    return { field: "created_at", order: "ASC" };
  if (priority === PriorityType.HIGH_LOW)
    return { field: "price_in_cents", order: "DSC" };
  if (priority === PriorityType.LOW_HIGH)
    return { field: "price_in_cents", order: "ASC" };
  return { field: "sales", order: "DSC" };
}
