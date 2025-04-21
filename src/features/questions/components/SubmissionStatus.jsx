import { CircleX } from "lucide-react";
import Checked from "../../../icons/Check";
import { CONST_SUBMISSIONS } from "../../../types/submissions/submissions-type";
import ButtonNoti from "../../../components/ButtonNoti";

/**
 *@param {{status: typeof CONST_SUBMISSIONS}} props
 */
export function SubmissionStatus({ status }) {
  switch (status) {
    case CONST_SUBMISSIONS.PASSED:
      return (
        <ButtonNoti btn="cancel" spring={true}>
          <Checked />
          SUCCESS!
        </ButtonNoti>
      );
    case CONST_SUBMISSIONS.FAILED:
      return (
        <ButtonNoti btn="cancel" spring={true}>
          <CircleX
            width={22}
            height={22}
            strokeWidth={1.5}
            className="text-red-400"
          />
          {status}
        </ButtonNoti>
      );
    default:
      return (
        <ButtonNoti btn="cancel" spring={true}>
          <CircleX
            width={22}
            height={22}
            strokeWidth={1.5}
            className="text-red-400"
          />
          Something went wrong, please try again.
        </ButtonNoti>
      );
  }
}
