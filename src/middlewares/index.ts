import { handleErrors } from "./handleErrors.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyId } from "./verifyId.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { isAdmin } from "./isAdmin.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { userToken } from "./userToken.middleware";
import { uniqueCategory } from "./uniqueCategory.middleware";
import { updateAdmin } from "./updateAdmin.middleware";
import { verifyCategoryId } from "./verifyCategoryId.middleware";
import { verifyEstateId } from "./verifyEstateId.middleware";
import { validateDate } from "./validateDate.middleware";
import { uniqueEstateSchedule } from "./uniqueEstateSchedule.middleware";
import { uniqueUserSchedule } from "./uniqueUserSchedule.middleware";

export default { 
    handleErrors, 
    validateBody, 
    verifyId, 
    uniqueEmail, 
    isAdmin, 
    verifyToken, 
    userToken,
    uniqueCategory,
    updateAdmin,
    verifyCategoryId,
    verifyEstateId,
    validateDate,
    uniqueEstateSchedule,
    uniqueUserSchedule
};