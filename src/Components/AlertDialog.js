import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core";
export function AlertDialogg() {
  const [isOpen, setIsOpen] = React.useState();
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <>
      <Button variantColor="red" onClick={() => setIsOpen(true)}>
        Delete Customer
      </Button>
      {/* <div className="review-form">
                        <div className="ourcar-info-book ">
                          <a
                            href="#"
                            className="bookbtn"
                            // data-toggle="modal"
                            data-target="#staticBackdrop"
                            onClick={() => setIsOpen(true)}
                          >
                            Book Now2
                          </a>
                        </div>
                       
                      </div> */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          {/* <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Customer
          </AlertDialogHeader> */}

      
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon size="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Your account has been updated!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                After less than 3 seconds, it will automatically switch to the
                Car page.
              </AlertDescription>
            </Alert>
       
     
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

// export default AlertDialogg;
